FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONNUNBUFFERED 1

WORKDIR /code

# hadolint ignore=DL3013
RUN pip install --no-cache-dir -U pip-tools pip

COPY pyproject.toml /code/

# hadolint ignore=DL3042
RUN pip-compile --no-cache-dir --output-file=requirements.txt pyproject.toml && \
pip-compile --extra=dev --output-file=dev-requirements.txt pyproject.toml && \
pip install -r requirements.txt  && \
pip install -r dev-requirements.txt

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

EXPOSE 8000
