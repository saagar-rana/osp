from django.urls import path
from .views import UploadCSV, login_view, UploadActivationKeys, GetActivationKey, contactView, manual_edit_serial_key, get_attached_key, view_used_keys, view_unused_keys, delete_act_table
urlpatterns = [
    path('upload-csv/', UploadCSV.as_view(), name='upload_csv'),
    path('upload-activation-keys/', UploadActivationKeys.as_view(), name='upload_activation_keys'),
    path('get-activation-key/', GetActivationKey.as_view(), name='get_activation_keys'),
    path("contact/", contactView.as_view(), name="contact"),
    path("edit-key/", manual_edit_serial_key.as_view(), name="edit-key"),
    path("login/", login_view.as_view(), name="login"),
    path("view_used_keys/", view_used_keys.as_view(), name="view_used_keys"),
    path("view_unused_keys/", view_unused_keys.as_view(), name="view_unused_keys"),
    path("delete_activation_keys/", delete_act_table.as_view(), name="delete_act_table"),
    path("get_attached_key/", get_attached_key.as_view(), name="get_attached_key"),

]