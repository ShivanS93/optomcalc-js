"""Tests for project."""

import json

import pytest
from fastapi import status

from app.main import SphCylAxis


@pytest.mark.anyio
@pytest.mark.parametrize(
    "test_input,expected",
    [
        pytest.param(
            SphCylAxis(sphere=+1, cylinder=-1, axis=100),
            SphCylAxis(sphere=0, cylinder=1, axis=10),
            id="+1.00/-1.00x100 -> plano/+1.00x10",
        ),
        pytest.param(
            SphCylAxis(sphere=+1, cylinder=-1, axis=80),
            SphCylAxis(sphere=0, cylinder=1, axis=170),
            id="+1.00/-1.00x80 -> plano/+1.00x170",
        ),
    ],
)
def test_cylindrical_power(client, test_input, expected):
    """Cylindrical power."""
    response = client.post(
        "/cylindrical_transposition/", data=test_input.json()
    )
    assert response.status_code == status.HTTP_200_OK
    result = response.json()
    assert result == json.loads(expected.json())
