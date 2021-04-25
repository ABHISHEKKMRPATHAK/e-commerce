from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Product(models.Model):
    user = models.ForeignKey(User , on_delete = models.SET_NULL,null=True)
    name = models.CharField(max_length=200,null=True,blank=True)
    image = models.ImageField(null=True,blank=True) 
    brand = models.CharField(max_length=200,null=True,blank=True)
    category = models.CharField(max_length=200,null=True,blank=True)
    description = models.TextField(null=True,blank=True)
    rating = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
    numReviews = models.IntegerField(null=True,blank=True)
    price = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
    countInStock = models.IntegerField(null=True,blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True,editable=False)

    def __str__(self):
         return self.name
    
class User(models.Model):
    _id = models.IntegerField(primary_key=True,null=False,blank=False) 
    userName = models.CharField(max_length=255,null=False,blank=False) 
    lastName =  models.CharField(max_length=50,null=False,blank=False)
    email = models.CharField(max_length=255,null=False,blank=False)
    password = models.CharField(max_length=255,null=False,blank=False)
    isStaff = models.BooleanField(null=False)
    isActive = models.BooleanField(null=False)
    isSuperuser = models.BooleanField(null=False)
   
    def __str__(self):
        return self.User
    
class Review(models.Model):
    _id =  models.IntegerField(primary_key=True,null=False,blank=False)
    user = models.IntegerField(null=True,blank=False)
    product = models.IntegerField(null=True,blank=False)
    name = models.CharField(max_length=255,null=True,blank=False)
    rating= models.IntegerField(null=False,blank=False)
    comment = models.TextField(null=False,blank=False) 
    createdAt = models.DateTimeField(null=False,blank=False) 

    def __str__(self):
        return self.Review
    

class Order(models.Model):
    _id=models.IntegerField(primary_key=True,null=False,blank=False)
    user= models.IntegerField(null=False,blank=False)
    paymentMethod = models.CharField(max_length=255,null=False,blank=False)
    taxprice = models.DecimalField(max_digits=7,decimal_places=2,null=False,blank=False)
    shippingPrice = models.DecimalField(max_digits=7,decimal_places=2,null=False,blank=False)
    totalPrice = models.DecimalField(max_digits=7,decimal_places=2,null=False,blank=False)
    isPaid = models.BooleanField(null=False,blank=False)
    paidAt = models.IntegerField(null=False,blank=False)
    isDelivered= models.IntegerField(null=False,blank=False)
    deliveredAt = models.DateTimeField(null=False,blank=False)
    createdAt=  models.DateTimeField(null=False,blank=False)

    def __str__(self):
        return self.Order
    

class ShippingAddress(models.Model):
    _id = models.IntegerField(primary_key=True,null=False,blank=False) 
    order = models.IntegerField(null=False,blank=False)
    address = models.CharField(max_length=255,null= False,blank=False) 
    city = models.CharField(max_length=255 , null= False,blank=False)
    pinCode = models.IntegerField(null=False,blank=False)
    country = models.CharField(max_length=255,null=False,blank=False)
    shippingprice =models.DecimalField( max_digits=7, decimal_places=2,null=False,blank=False)

    def __str__(self):
        return self.ShippingAddress
    

class OrderItem(models.Model):
    _id =models.IntegerField(primary_key=True,null=False,blank=False)
    order = models.IntegerField(null=False,blank=False)
    product =models.IntegerField(null=False,blank=False)
    name = models.CharField(max_length=255,null=False,blank=False)
    quantity = models.IntegerField(null=False,blank=False)

    def __str__(self):
        return self.OrderItem
    