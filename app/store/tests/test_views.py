# from django.urls import reverse
# from rest_framework.test import APITestCase
# from rest_framework import status
# from user.models import User

# class StoreAPITests(APITestCase):
#   base_url_category = reverse("category-list")
#   base_url_item = reverse('item-list')
#   base_url_order = reverse('order-list')
#   base_url_checkout = reverse('checkout')
#   data_order = {
#       "price": "1.00",
#       "ordered_items": [
#         {
#           "item": 1,
#           "cartQty": 1,
#           "price": "1.00"
#         }
#       ]
#     }
#   def test_checkout(self):

#     self.user = User.objects.create_user(username='testuser', email='testuser@test.com', password='testpass')
#     self.client.force_authenticate(user=self.user)
#     response = self.client.post(f"{self.base_url_checkout}", data=self.data_order, format='json')
#     self.assertEqual(response.status_code, status.HTTP_201_CREATED)

#   def test_order(self):

#     response = self.client.get(f"{self.base_url_order}")
#     self.assertEqual(response.status_code, status.HTTP_200_OK)

#   def test_category(self):

#     response = self.client.get(f"{self.base_url_category}")
#     self.assertEqual(response.status_code, status.HTTP_200_OK)

#   def test_item(self):

#     response = self.client.get(f"{self.base_url_item}")
#     self.assertEqual(response.status_code, status.HTTP_200_OK)