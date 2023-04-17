# from rest_framework import serializers
# from .models import Item, Order, OrderedItem, Category

# class CategorySerializer(serializers.ModelSerializer):
#   items = serializers.StringRelatedField(many=True)

#   class Meta:
#     model = Category
#     fields = ('id', 'name', 'items')

# class ItemSerializer(serializers.ModelSerializer):
#   category = serializers.StringRelatedField()

#   class Meta:
#     model = Item
#     fields = ('id', 'name', 'price', 'image', 'description', 'quantity', 'created', 'updated', 'category', 'slug')

# class OrderedItemSerializer(serializers.ModelSerializer):

#   class Meta:
#     model = OrderedItem
#     fields = ('item', 'cartQty', 'id', 'price')

# class OrderSerializer(serializers.ModelSerializer):
#   ordered_items = OrderedItemSerializer(many=True)


#   class Meta:
#     model = Order
#     fields = ('id', 'created', 'updated', 'price', 'ordered_items')

#   def create(self, validated_data):
#     ordered_items_data = validated_data.pop('ordered_items')
#     order = Order.objects.create(**validated_data)

#     for ordered_item_data in ordered_items_data:
#       OrderedItem.objects.create(order=order, **ordered_item_data)
#     return order