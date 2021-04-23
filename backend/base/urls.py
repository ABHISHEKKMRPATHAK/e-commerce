from django.urls import path 
from . import views 

urlpatterns = [
    path('api/ ' , views.getRoutes, name = "routes "),
    path('products/', views.getProducts, name ="products"),
    path('products/<str:pk>/', views.getProduct, name ="product"),
]
    