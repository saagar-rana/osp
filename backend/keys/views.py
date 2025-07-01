from .script_fn import send_sms_via_api, contact_mail, check_windows, check_office, check_professional, check_server, check_sql, update_serializer
from datetime import datetime, date
import csv
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import *
from django.core.mail import EmailMessage
from django.core.exceptions import ValidationError
from django.http import JsonResponse
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import requests
import json
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework import status
from django.db import transaction



class UploadCSV(APIView):
    @transaction.atomic
    def post(self, request, *args, **kwargs):

        file = request.FILES.get('file')
        category = request.data.get('category').upper()
        if not file or not file.name.endswith('.csv'):
            return Response({'error': 'Please upload a valid CSV file.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            csv_reader = csv.DictReader(file.read().decode('utf-8').splitlines())

            created_records = []
            for row in csv_reader:
                serial_key = row.get('serial_key', None)
                activation_key = row.get('activation_key', None)
                if category=="A":
                    serializer = Windows10HomeActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })
                elif category=="B":
                    serializer = Windows10HomeOEMActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="C":
                    serializer = Windows10ProActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="D":
                    serializer = Windows10ProOEMActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })
                elif category=="E":
                    serializer = Windows11HomeActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="F":
                    serializer = Windows11HomeOEMActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="G":
                    serializer = Windows11ProActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })
                elif category=="H":
                    serializer = Windows11ProOEMActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="I":
                    serializer = Office2019ActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="J":
                    serializer = Office2019BindActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })
                elif category=="K":
                    serializer = Office2021ActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="L":
                    serializer = Office2021BindActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="M":
                    serializer = Office2021MacBindActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })
                elif category=="N":
                    serializer = OfficeHomeBusinessWinActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="O":
                    serializer = OfficeHomeBusinessMacActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="P":
                    serializer = OfficeHomeStudentWinActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })
                elif category=="Q":
                    serializer = OfficeHomeStudentMacActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="R":
                    serializer = Office2021HomeBasicActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="S":
                    serializer = ProjectProfessional2019ActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })
                elif category=="T":
                    serializer = ProjectProfessional2021ActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="U":
                    serializer = VisioProfessional2019ActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="V":
                    serializer = VisioProfessional2021ActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })
                elif category=="W":
                    serializer = WindowsServer2016EssentialActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="X":
                    serializer = WindowsServer2019StandardActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="Y":
                    serializer = WindowsServer2019DatacenterActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })
                elif category=="Z":
                    serializer = WindowsServer2022DatacenterActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="AA":
                    serializer = MicrosoftSQLServer2019StandardActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="AB":
                    serializer = MicrosoftSQLServer2019EnterpriseActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })
                elif category=="AC":
                    serializer = MicrosoftSQLServer2022StandardActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })

                elif category=="AD":
                    serializer = MicrosoftSQLServer2022EnterpriseActivationRequestSerializer(data={
                        'serial_key': serial_key,
                        'activation_key': activation_key,
                    })


                if serializer.is_valid():
                    serializer.save()
                    created_records.append(serializer.data)
                else:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            return Response({'message': f'{len(created_records)} records created successfully.'}, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class UploadActivationKeys(APIView):
    @transaction.atomic
    def post(self, request, *args, **kwargs):
        file = request.FILES.get('file')
        if not file or not file.name.endswith('.csv'):
            return Response({'error': 'Please upload a valid CSV file.'}, status=status.HTTP_400_BAD_REQUEST)

        # if file:
        #     # Save the uploaded file to the 'uploads/' directory
        #     with open('uploads/' + file.name, 'wb+') as destination:
        #         for chunk in file.chunks():
        #             destination.write(chunk)
        # file='uploads/' + file.name


        try:
            csv_reader = csv.DictReader(file.read().decode('utf-8').splitlines())

            created_records = []
            for row in csv_reader:
                activation_key = row.get('activation_key')
                category=row.get('category').upper()
                expiry_date= row.get('expiry_date', None)

                serializer = ActivationKeySerializer(data={
                    'activation_key': activation_key,
                    'category': category,
                    'expiry_date': expiry_date

                })

                if serializer.is_valid():
                    serializer.save()
                    created_records.append(serializer.data)
                else:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            return Response({'message': f'{len(created_records)} records created successfully.'}, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class GetActivationKey(APIView):
    # @transaction.atomic
    def post(self, request, *args, **kwargs):
#get gata from user
        data = request.data
        serial_key = data.get('serial_key')
        phone = data.get('phone')
        category=data.get('category', None)
        date_now=date.today()

#checking if serial key is valid
        if not category:
            category= "Windows"

        if not serial_key or not phone:
            return Response({'error': 'Please provide both serial_key and phone.'}, status=status.HTTP_400_BAD_REQUEST)

        if category=="Windows":
            activation_request, category = check_windows(serial_key)

        if category=="Office":
            activation_request, category = check_office(serial_key, category)

        if category=="Professional":
            activation_request, category = check_professional(serial_key)

        if category=="Server":
            activation_request, category = check_server(serial_key)

        if category=="SQL":
            activation_request, category = check_sql(serial_key)

#for invalid serial key
        if category=="No service":
            return Response({'error': 'Incorrect serial key.', 'serial': serial_key, 'category': category}, status=status.HTTP_404_NOT_FOUND)

#if serial key is not invalid checking if key is available
        category=category.upper()
        # url_for_sending_sms = "https://sms.aakashsms.com/sms/v3/send"
        # auth_token = "794f18bc9e08b68c957b0c4437a0fb64464067b8524a436a362d33aec943f8a3"
        if activation_request.activation_key=='None':
            print("activation key not found")
            try:
                activation_keys = ActivationKeys.objects.filter(category=category, used=False)
                print(activation_keys)
                for key in activation_keys:
                    # if key.expiry_date > date_now and key.used== False:
                    if key.used== False:
                        pass_key=key.activation_key
                        print(key)
                        activation_request.activation_key=pass_key
                        activation_request.request_date=datetime.now()
                        activation_request.is_available=False
                        activation_request.phone = phone
                        activation_request.save()
                        key.used=True
                        key.save()
                        break

#for activation key not available and new request
                if activation_request.activation_key in ['None', None, '']:
                    alt_msz_admin = f"New request for {category} from {phone} for key {serial_key}."
                    to="pratap.thapa279@gmail.com"
                    name="OSP Web"
                    sender="originalsoftwareproduct@gmail.com"
                    subject='New request for key'
                    msz=alt_msz_admin
                    contact_mail(sender, name, msz, to, subject)
                    send_sms_via_api(alt_msz_admin, '9822777101')
                    send_sms_via_api(alt_msz_admin, '9822777102')
                    # send_sms_via_api(alt_msz_admin, '9842271260')
                    # response = requests.post(url_for_sending_sms, data={"auth_token": auth_token, "to": '9819115285', "text": alt_msz_admin})
                    # response = requests.post(url_for_sending_sms, data={"auth_token": auth_token, "to": '9842271260', "text": alt_msz_admin})

                    alt_msz_user = f"We are processing your request for {category}.\nThank you for your patience."
                    send_sms_via_api(alt_msz_user, phone)

                    # response = requests.post(url_for_sending_sms, data={"auth_token": auth_token, "to": '9846145758', "text": alt_msz_user})
                    return Response({'message': alt_msz_user, 'category': category}, status=status.HTTP_201_CREATED)

#for available activation key and new request
                if category in ['MICROSOFT SQL SERVER 2022 ENTERPRISE', 'MICROSOFT SQL SERVER 2022 STANDARD', 'MICROSOFT SQL SERVER 2019 ENTERPRISE', 'MICROSOFT SQL SERVER 2019 STANDARD']:
                    activation_request, category = check_sql(serial_key)
                if category in ['WINDOWS SERVER 2022 DATACENTER', 'WINDOWS SERVER 2019 DATACENTER', 'WINDOWS SERVER 2019 STANDARD', 'MICROSOFT SQL SERVER 2019 STANDARD']:
                    activation_request, category = check_server(serial_key)
                if category in ['VISIO PROFESSIONAL 2021', 'VISIO PROFESSIONAL 2019', 'PROJECT PROFESSIONAL 2021', 'PROJECT PROFESSIONAL 2019']:
                    activation_request, category = check_professional(serial_key)
                if category in ["OFFICE 2021 HOME BASIC", "OFFICE HOME STUDENT MAC", "OFFICE HOME STUDENT WINDOWS", "OFFICE HOME BUSINESS MAC", "OFFICE HOME BUSINESS WINDOWS", "OFFICE 2021 MAC BIND", "OFFICE 2021 BIND", "OFFICE 2019 BIND", "OFFICE 2021", "OFFICE 2019"]:
                    activation_request, category = check_office(serial_key, category)
                if category in ["WINDOWS 11 PRO OEM", "WINDOWS 11 PRO", "WINDOWS 11 HOME OEM", "WINDOWS 10 HOME", "WINDOWS 10 PRO OEM", "WINDOWS 10 PRO", "WINDOWS 10 HOME OEM", "WINDOWS 10 HOME"]:
                    activation_request, category = check_windows(serial_key)

                send_text=f'Your {category} activation key is: {activation_request.activation_key} via: Original Software Products'
                # url_for_sending_sms = "https://sms.aakashsms.com/sms/v3/send"
                # auth_token = "794f18bc9e08b68c957b0c4437a0fb64464067b8524a436a362d33aec943f8a3"
                # response = requests.post(url_for_sending_sms, data={"auth_token": auth_token, "to": phone, "text": send_text})
                send_sms_via_api(send_text, phone)
                return Response({'serial key': activation_request.serial_key,'activation_key': activation_request.activation_key, 'phone': phone, 'category': category}, status=status.HTTP_200_OK)

#for activation key not available and new request
            except:
                print('a2')
                alt_msz_admin = f"New request for {category} from {phone} for {serial_key}."
                to="pratap.thapa279@gmail.com"
                name="OSP Web"
                sender="originalsoftwareproduct@gmail.com"
                subject='New request for key'
                msz=alt_msz_admin
                contact_mail(sender, name, msz, to, subject)
                send_sms_via_api(alt_msz_admin, '9822777101')
                send_sms_via_api(alt_msz_admin, '9822777102')

                # send_sms_via_api(alt_msz_admin, '9842271260')
                # response = requests.post(url_for_sending_sms, data={"auth_token": auth_token, "to": '9819115285', "text": alt_msz_admin})
                # response = requests.post(url_for_sending_sms, data={"auth_token": auth_token, "to": '9842271260', "text": alt_msz_admin})

                alt_msz_user = f"We are processing your request for {category}.\nThank you for your patience."
                send_sms_via_api(alt_msz_user, phone)
                # response = requests.post(url_for_sending_sms, data={"auth_token": auth_token, "to": '9846145758', "text": alt_msz_user})
                return Response({'message': alt_msz_user, 'category': category}, status=status.HTTP_201_CREATED)

#for old request
        send_text=f'Your {category} activation key is: {activation_request.activation_key} via: Original Software Products'
        send_text_msz=f'Your {category} activation key is: {activation_request.activation_key}\nvia: Original Software Products'
        send_sms_via_api(send_text_msz, phone)
        # response = requests.post(url_for_sending_sms, data={"auth_token": auth_token, "to": phone, "text": send_text})
        return Response({'serial key': activation_request.serial_key, 'activation_key': activation_request.activation_key, 'First Requested': activation_request.request_date, 'Requested from': activation_request.phone, 'Category': category}, status=status.HTTP_200_OK)

class contactView(APIView):
    @transaction.atomic
    def post(self, request):
        data = request.data
        name = data.get('name')
        sender_email = data.get('sender_email')
        msz = data.get('msz')
        to = "originalsoftwareproduct@gmail.com"
        subject=f'Contact from {name}'
        try:
            contact_mail(sender_email, name, msz, to, subject)
            return Response({'message': 'Email sent successfully.'}, status=status.HTTP_201_CREATED)
        except ValidationError as e:
            return Response({'message': f'Invalid email data: {e}'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'message': f'Failed to send email: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class manual_edit_serial_key(APIView):
    @transaction.atomic
    def put(self, request):
        data=request.data
        serial_key=data.get('serial_key')
        activation_key=data.get('activation_key')

        date_now=date.today()
        phone = data.get('phone')
        category=data.get('category').upper()
        if not serial_key or not phone or not category or not activation_key:
            return Response({'error': 'Please provide all serial_key, phone, category and activation key.'}, status=status.HTTP_400_BAD_REQUEST)

        data={
            'serial_key': serial_key,
            'activation_key':activation_key,
            'request_date': date_now,
            'phone': phone,
            'is_available': False
        }
        # print(date_now)
        # try:
        if category=="WINDOWS":
            activation_request, category = check_windows(serial_key)
            print("1")

        if category=="OFFICE":
            activation_request, category = check_office(serial_key, category)
            print("1")

        if category=="PROFESSIONAL":
            activation_request, category = check_professional(serial_key, category)
            print("1")

        if category=="SERVER":
            activation_request, category = check_server(serial_key, category)
            print("1")

        if category=="SQL":
            activation_request, category = check_sql(serial_key, category)
            print("1")

        activation_request.request_date=date_now
        activation_request.phone=phone
        activation_request.is_available=False
        activation_request.save
        serializer = update_serializer(activation_request, data, category)

        try:
            key = ActivationKeys.objects.get(activation_key=activation_key)
            key.used=True
            key.save()
        except Exception as e:
            pass


        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Upadated as','serial key': activation_request.serial_key, 'activation_key': activation_request.activation_key, 'First Requested': activation_request.request_date, 'Requested from': activation_request.phone, 'Category': category}, status=status.HTTP_200_OK)
            # return JsonResponse(serializer.data)
        else:
            return JsonResponse(serializer.errors, status=400)

        # except:
        #     return Response({'error': 'Serial key not found in database'}, status=status.HTTP_400_BAD_REQUEST)


class login_view(APIView):
    @transaction.atomic
    def post(self, request):
        data = request.data
        username = data.get('username')
        password = data.get('password')
        if not username or not password:
            return Response({'error': 'Please provide all username and password assigned to you.'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            if username=="originalsoftwareproducts@gmail.com" and password=="100$osPProduct":
                return Response({'message': 'Logged in successfully'}, status=status.HTTP_201_CREATED)
            else:
                return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        except exception as e:
            return Response({'message': f'Error in authentication: {e}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class view_used_keys(APIView):
    @transaction.atomic
    def get(self, request):
        # Filter ActivationKey objects where used is True
        used_keys = ActivationKeys.objects.filter(used=True)
        # Create a list to store the selected attributes
        key_data = []
        for key in used_keys:
            key_info = {
                'activation_key': key.activation_key,
                'category': key.category,
                'expiry_date': key.expiry_date.strftime('%Y-%m-%d') if key.expiry_date else "0000-00-00",  # Format date as a string
                '_': '____________________________________________________'
            }
            key_data.append(key_info)
        return JsonResponse(key_data, safe=False)

class view_unused_keys(APIView):
    @transaction.atomic
    def get(self, request):
        # Filter ActivationKey objects where used is True
        used_keys = ActivationKeys.objects.filter(used=False)
        # Create a list to store the selected attributes
        key_data = []
        for key in used_keys:
            key_info = {
                'activation_key': key.activation_key,
                'category': key.category,
                'expiry_date': key.expiry_date.strftime('%Y-%m-%d'),  # Format date as a string
                '_': '______________________________________________________________________________'
            }
            key_data.append(key_info)
        return JsonResponse(key_data, safe=False)

# class delete_act_table(APIView):
#     # @transaction.atomic
#     # def post(self, request):
#     #     ActivationKeys.objects.all().delete()
#     #     return Response({'message': 'Activation keys table deleted successfully.'}, status=status.HTTP_201_CREATED)

#     @transaction.atomic
#     def delete(self, request):
#         activation_key = request.data.get('activation_key')
#         try:
#             act_key_to_delete = ActivationKeys.objects.get(activation_key=activation_key)
#             act_key_to_delete.delete()
#             return Response({'message': 'Activation keys table deleted successfully.'}, status=status.HTTP_201_CREATED)
#         except ActivationKeys.DoesNotExist:
#             return Response({'message': f'Data for activation key {activation_key} not found.'}, status=status.HTTP_404_NOT_FOUND)


class delete_act_table(APIView):
    @transaction.atomic
    def delete(self, request):
        activation_key = request.data.get('activation_key')
        try:
            # Use filter instead of get to retrieve all matching objects
            act_keys_to_delete = ActivationKeys.objects.filter(activation_key=activation_key)

            # Check if there are any matching objects
            if act_keys_to_delete.exists():
                # Delete all matching objects
                act_keys_to_delete.delete()
                return Response({'message': 'Activation keys deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
            else:
                return Response({'message': f'Data for activation key {activation_key} not found.'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'message': f'An error occurred: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class get_attached_key(APIView):
    @transaction.atomic
    def post(self, request):
        data = request.data
        serial_key = data.get('serial_key')
        category= "Windows"

        if category=="Windows":
            activation_request, category = check_windows(serial_key)

        if category=="Office":
            activation_request, category = check_office(serial_key)

        if category=="Professional":
            activation_request, category = check_professional(serial_key)

        if category=="Server":
            activation_request, category = check_server(serial_key)

        if category=="SQL":
            activation_request, category = check_sql(serial_key)
        key_data = []
        key_info = {
            'serial_key' : activation_request.serial_key,
            'activation_key': activation_request.activation_key,
            'phone' : activation_request.phone,
            'request_date' : activation_request.request_date,
        }
        key_data.append(key_info)
        return JsonResponse(key_data, safe=False)



