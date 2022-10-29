"""Root file."""

from fastapi import APIRouter, FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, validator

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class PrescriptionError(Exception):
    """Prescription Error."""

    def __init__(self, value, message):
        """Initialise."""
        self.value = value
        self.message = message


class SphCylAxis(BaseModel):
    """Back Vertex Power model."""

    sphere: float
    cylinder: float
    axis: float

    @validator("axis")
    @classmethod
    def _axis_valid(cls, value: float) -> float:
        """Validate axis.

        Axis must be between 180 to 0 degrees.
        """
        if value > 180 or value < 0:
            raise PrescriptionError(
                value=value, message="Axis must be between 0 and 180 degrees"
            )
        return value


@app.get("/")
async def root():
    """Root."""
    return {"detail": "Welcome to OptomCalc!"}


router = APIRouter(
    prefix="/cylindrical_transposition", tags=["cylindrical_transposition"]
)


@router.post("/", response_model=SphCylAxis, status_code=status.HTTP_200_OK)
async def calculate(inputs: SphCylAxis):
    """Calculate cylindrical transposition."""
    sphere = inputs.sphere + inputs.cylinder
    cylinder = inputs.cylinder * -1
    axis = inputs.axis + 90
    if inputs.axis > 90:
        axis = inputs.axis - 90
    return {"sphere": sphere, "cylinder": cylinder, "axis": axis}


@router.get("/")
async def get():
    """Cylinderical transposition."""
    return {"detail": "Cylindrical Transposition"}


app.include_router(router)


def main():
    """Run main function."""
    pass


if __name__ == "__main__":
    main()
