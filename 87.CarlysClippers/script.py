hairstyles = ["bouffant", "pixie", "dreadlocks",
              "crew", "bowl", "bob", "mohawk", "flattop"]

prices = [30, 25, 40, 20, 20, 35, 50, 35]

last_week = [2, 3, 5, 8, 4, 4, 6, 2]

total_price = 0
for price in prices:
  total_price += price

average_price = total_price / len(prices)
print("Average Haircut Price: ${0}".format(average_price))

new_prices = [price - 5 for price in prices]
print("New Haircut prices with 5 dollars off are: " + str(new_prices))

total_revenue = 0
for i in range(len(hairstyles)):
  total_revenue += prices[i] * last_week[i]
print("Total Revenue: ${0}".format(total_revenue))

average_daily_revenue = total_revenue / 7
print("Average Daily Revenue: ${0}".format(average_daily_revenue))

cuts_under_30 = [hairstyles[i]
                 for i in range(len(new_prices)) if new_prices[i] < 30]

print("Haircut discounts for under 30's are: " + str(cuts_under_30))
