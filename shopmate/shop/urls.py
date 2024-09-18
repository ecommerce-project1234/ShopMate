from django.urls import path
from . import views


urlpatterns = [
    
    path("", views.test, name="test"),
    
    path('product/<int:product_id>/', views.product_detail, name='product_detail'),
    path('add_to_cart/<int:product_id>/', views.add_to_cart, name='add_to_cart'),
    path('cart/', views.cart, name='cart')
]