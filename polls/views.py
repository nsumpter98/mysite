from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib import admin


def index(request):
    #if not request.user.is_authenticated:
   #     return redirect(admin.site.urls)
    return HttpResponse("""<!DOCTYPE html>
                            <html lang="en">
                            <head>
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                            
                            </head>
                            <meta charset="UTF-8">
                            <title>Page Title</title>
                            <meta name="viewport" content="width=device-width,initial-scale=1">
                            <link rel="stylesheet" href="">
                            <style>
                            </style>
                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
                            
                            <script src=""></script>
                            <body>
                            
                            <div class="">
                             <h1>This is a Heading</h1>
                             <p>This is a paragraph.</p>
                             <p>This is another paragraph.</p>
                            </div>
                            <div class="container">
                              <div class="row">
                                <div class="col-sm-4">
                                  <h3>Test</h3>
                                  <p>Lorem ipsum dolor..</p>
                                </div>
                                <div class="col-sm-4  bg-primary text-white">
                                  <h3>Column 2</h3>
                                  <p>Lorem ipsum dolor..</p>
                                </div>
                                <div class="col-sm-4">
                                  <h3>Column 3</h3>
                                  <p>Lorem ipsum dolor..</p>
                                </div>
                              </div>
                            </div>
                            
                            </body>
                            </html>
                            """)

# Create your views here.
