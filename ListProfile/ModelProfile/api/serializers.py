from rest_framework.serializers import ModelSerializer
from ModelProfile.models import Profile

class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"