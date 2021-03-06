from rest_framework import serializers
from SubCategory.models import SubCategory
from ServiceProvider.serialize import ProviderCategorySerializer

class  SubCategorySerializer(serializers.ModelSerializer):
    subCatproviders = ProviderCategorySerializer(many=True,read_only=True)
    class Meta:
        model=SubCategory
        fields=('subName','subImage','category','subCatproviders')


