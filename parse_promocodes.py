import requests
from bs4 import BeautifulSoup
import json

# URL страницы с промокодами
url = 'https://www.prydwen.gg/star-rail/'

response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# Найдите соответствующие элементы с промокодами на странице
# Это пример, вам нужно адаптировать его под структуру конкретного сайта
codes = []
for item in soup.select('.codes .box p.code'):
    code = item.text.strip()
    codes.append(code)
    print(code)

# Сохраните данные в JSON-файл
with open('promocodes.json', 'w', encoding='utf-8') as f:
    json.dump(codes, f, ensure_ascii=False, indent=4)
