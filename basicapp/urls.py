from .views import *
from django.urls import path
urlpatterns=[
    path('',getNote),
    path('addnote/',addNote),
    path('updatenote/<int:pk>/',updateNote),
    path('deletenote/<int:pk>/',deleteNote)
]