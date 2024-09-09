from django.shortcuts import HttpResponse

# Create your views here.
def layout_home(request):
    return HttpResponse("Django Home")