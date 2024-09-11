from django.shortcuts import render
from .models import Product

# Create your views here.

def test(request):
    products = Product.objects.all()
    return render(request, 'test.html', {'products':products})
