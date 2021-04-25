from django.shortcuts import render
from django.http  import JsonResponse

from .products import products
from .models import Product
from.serializers import ProductSerializer 

from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
    'api/products/',
    'api/products/create/',
    'api/products/upload',
    ]
    return Response('Hello THere',safe=False)  
@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products,many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    product = None
    for i in products:
        if i['_id']==pk:
             product= i 
             break
    return Response(product)
    