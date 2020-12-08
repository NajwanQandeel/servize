from django.db import models
from User.models import User
from ServiceProvider.models import ServiceProvider

className Reviews(models.Model):
    stars = models.IntegerField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    servicProvider = models.ForeignKey(ServiceProvider, on_delete=models.CASCADE) # connect provider with it's images.
    
      

     
 

