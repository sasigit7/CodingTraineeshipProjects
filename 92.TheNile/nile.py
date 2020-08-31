from math import sin, cos, atan2, sqrt


def get_distance(from_lat, from_long, to_lat, to_long):
  dlon = to_long - from_long
  dlat = from_lat - to_lat
  a = (sin(dlat/2)) ** 2 + cos(from_lat) * cos(to_lat) * (sin(dlon/2)) ** 2
  c = 2 * atan2(sqrt(a), sqrt(1-a))
  distance = a * c
  return distance


SHIPPING_PRICES = {
    'Ground': 1,
    'Priority': 1.6,
    'Overnight': 2.3,
}


def format_price(price):
  return "${0:.2f}".format(price)
