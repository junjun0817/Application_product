from django.urls import path
from app.views import SampleAPIView

urlpatterns = [
    path("sample/", SampleAPIView.as_view(), name="sample"),
]