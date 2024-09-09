from django.contrib import admin
from .models import Product, ProductVariant, Inventory, Category
# Register your models here.
admin.site.register(Product)
admin.site.register(ProductVariant)
admin.site.register(Inventory)
admin.site.register(Category)