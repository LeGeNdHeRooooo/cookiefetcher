from selenium import webdriver
import time

driver = webdriver.Chrome()

driver.get("https://ozon.ru")

time.sleep(5)

driver.execute_script("document.dispatchEvent(new Event('fetchCookies'));")

get_cookies_js = """
var cookieElement = document.createElement('div');
cookieElement.id = 'cookieData';
document.body.appendChild(cookieElement);
document.addEventListener('fetchedCookies', (event) => {
    document.getElementById('cookieData').innerText = JSON.stringify(event.detail);
});
"""
driver.execute_script(get_cookies_js)

time.sleep(5)

cookies = driver.execute_script("return document.getElementById('cookieData').innerText;")
print(cookies)

driver.quit()
