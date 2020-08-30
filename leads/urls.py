from django.urls import path
from . import views

urlpatterns = [
    # ex: /api/lead
    path('api/lead/', views.lead_list),
    # ex: /api/lead/5
    path('api/lead/<int:pk>', views.lead_detail),
    # ex: /users/
    path('users/', views.UserList.as_view()),
    # ex: /users/5
    path('users/<int:pk>', views.UserDetail.as_view()),
]