"""Fixtures."""

import pytest
from fastapi.testclient import TestClient

from app.main import app


@pytest.fixture
def client():
    """Client to make requests."""
    return TestClient(app)
