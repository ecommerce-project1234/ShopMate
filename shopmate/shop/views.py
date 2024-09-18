from django.shortcuts import render, redirect
from .models import Product
from django.shortcuts import render, get_object_or_404
# Create your views here.

def test(request):
    products = Product.objects.all()
    return render(request, 'test.html', {'products':products})
def product_detail(request, product_id):
     product = get_object_or_404(Product, id=product_id)
     return render(request, 'product_detail.html', {'product': product})
def add_to_cart(request, product_id):
    # Please add the logic for carts
    return redirect('cart')  
def cart(request):
    return render(request, 'cart.html')