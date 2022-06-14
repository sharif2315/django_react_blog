from django.urls import path, include
from .views import CustomUserCreate
from .views import BlacklistTokenUpdateView


urlpatterns = [
    path('register/', CustomUserCreate.as_view(), name='create_user'),

    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist')

]
