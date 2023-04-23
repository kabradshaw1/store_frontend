# from django.shortcuts import get_object_or_404
# from user.models import User
# from .models import Item, Order, Category
# from .serializers import ItemSerializer, OrderSerializer, CategorySerializer
# from rest_framework import viewsets, status
# from rest_framework.response import Response
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework import status, permissions
# from rest_framework.request import Request

# class CategoryViewSet(viewsets.ModelViewSet):
#   http_method_names = ['get']
#   serializer_class = CategorySerializer
#   queryset = Category.objects.all()

# class ItemViewSet(viewsets.ModelViewSet):
#   http_method_names = ['get']
#   queryset = Item.objects.all()
#   serializer_class = ItemSerializer

#   def get_object(self, queryset=None, **kwargs):
#     item = self.kwargs.get('pk')
#     return get_object_or_404(Order, name=item)

#   def get_queryset(self):
#     return Item.objects.all()

# class UserRequest(Request):
#   user: User

# class OrderViewSet(viewsets.ModelViewSet):
#   request: UserRequest
#   http_method_names = ['get']
#   serializer_class = OrderSerializer

#   def get_queryset(self):
#     user_id = self.request.user.id
#     queryset = Order.objects.filter(user=user_id)
#     return queryset


# @api_view(['POST'])
# @permission_classes([permissions.IsAuthenticated])
# def checkout(request):
#   request: UserRequest
#   serializer = OrderSerializer(data=request.data)

#   if serializer.is_valid():
#       # stripe.api_key = config('STRIPE_SECRET_KEY')
#       # paid_amount = sum(item.get('cartQty') * item.get('product').price for item in serializer.validated_data['items'])
#     try:
#       # charge = stripe.Charge.create(
#       #     amount=int(paid_amount * 100),
#       #     currency='USD',
#       #     description='Charge from Djackets',
#       #     source=serializer.validated_data['stripe_token']
#       # ), paid_amount=paid_amount

#       serializer.save(user=request.user)

#       return Response(serializer.data, status=status.HTTP_201_CREATED)
#     except Exception:
#       return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#   return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


