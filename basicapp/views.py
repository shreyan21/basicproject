from django.shortcuts import render
from .models import Note
from .serializer import NoteSerializer
# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
 
# Create your views here.
@api_view(['GET'])
def getNote(request):
    note=Note.objects.all()
    serializer=NoteSerializer(note,many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addNote(request):
    serializer=NoteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['PUT'])
def updateNote(request, pk):
    try:
        note = Note.objects.get(id=pk)
    except Note.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

   

    serializer = NoteSerializer(note, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteNote(request,pk):
    try:
        note = Note.objects.get(id=pk)
    except Note.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

   
    note.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)