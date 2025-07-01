from datetime import datetime, timedelta
import random
import csv

# List of categories
categories = ["Win10home", "Win10homeOEM", "Office19", "Office19bind", "Win11home", "Win11homeOEM", "Office21", "Office21bind"]

# Helper function to generate a random activation key in the format AAAA-BBBB-CCCC-DDDD
def generate_activation_key():
    key_parts = ["".join(random.choices("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", k=5)) for _ in range(4)]
    return "-".join(key_parts)

# Helper function to generate a random expiry date
def generate_expiry_date():
    today = datetime.strptime("2023-08-04", "%Y-%m-%d")
    lower_limit = today - timedelta(days=365)  # 365 days (1 year) in the past
    upper_limit = today + timedelta(days=365)  # 365 days (1 year) in the future
    random_days = random.randint(0, 365)       # Random days within the year
    expiry_date = lower_limit + timedelta(days=random_days)
    return expiry_date.strftime("%Y-%m-%d")

# Generate 30 data with dates less than today
data_less_than_today = []
for _ in range(30):
    key = generate_activation_key()
    category = random.choice(categories)
    expiry_date = generate_expiry_date()
    data_less_than_today.append((key, category, expiry_date))

# Generate 70 data with dates greater than today
data_greater_than_today = []
for _ in range(70):
    key = generate_activation_key()
    category = random.choice(categories)
    expiry_date = generate_expiry_date()
    data_greater_than_today.append((key, category, expiry_date))

# Write the generated data to a new CSV file
header = ["activation_key", "category", "expiry_date"]

with open("generated_serial_keys.csv", "w", newline="") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(header)
    writer.writerows(data_less_than_today)
    writer.writerows(data_greater_than_today)

print("Data generated and saved to generated_serial_keys.csv")
