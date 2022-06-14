import re
from rest_framework import generics, viewsets, filters
from blog.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import (BasePermission, IsAdminUser, DjangoModelPermissionsOrAnonReadOnly, IsAuthenticated,
                                        IsAuthenticatedOrReadOnly, SAFE_METHODS)
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
        


class PostUserWritePermission(BasePermission):
    # create group for teachers and set permission for teachers/students 

    message = 'Editing posts is restricted to this author only'

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        
        return obj.author == request.user


class PostList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Post.postobjects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView, PostUserWritePermission):
    permission_classes = [PostUserWritePermission]
    queryset = Post.objects.all()
    serializer_class = PostSerializer



# class PostList(viewsets.ModelViewSet):
#     permission_classes = [IsAuthenticated]
#     serializer_class = PostSerializer

#     def get_object(self, queryset=None, **kwargs):
#         item = self.kwargs.get('pk')
#         return get_object_or_404(Post, slug=item)

#     # Define Custom Queryset
#     def get_queryset(self):
#         return Post.objects.all()

