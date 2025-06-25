from django.shortcuts import render
from django.urls import path

from .views import user_detail_view
from .views import user_redirect_view
from .views import user_update_view

def index(request):
    return render(request, "index.html")

app_name = "users"
urlpatterns = [
    path("~redirect/", view=user_redirect_view, name="redirect"),
    path("~update/", view=user_update_view, name="update"),
    path("<int:pk>/", view=user_detail_view, name="detail"),
    path("index/", view=index, name="index"),
]
