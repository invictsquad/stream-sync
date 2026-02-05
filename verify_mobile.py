from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        # Emulate a mobile device (iPhone 12 Pro)
        iphone_12 = p.devices['iPhone 12 Pro']
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            **iphone_12,
            locale='en-US'
        )
        page = context.new_page()

        # Define the base URL
        base_url = "http://localhost:8080"

        # 1. Home Page
        print(f"Navigating to {base_url}...")
        page.goto(base_url)
        page.wait_for_selector('main', timeout=10000)
        time.sleep(2) # Wait for animations/rendering
        page.screenshot(path="mobile_home.png")
        print("Captured mobile_home.png")

        # 2. Dashboard
        print("Navigating to Dashboard...")
        page.goto(f"{base_url}/dashboard")
        page.wait_for_selector('main', timeout=10000)
        time.sleep(2)
        page.screenshot(path="mobile_dashboard.png")
        print("Captured mobile_dashboard.png")

        # 3. Categories
        print("Navigating to Categories...")
        page.goto(f"{base_url}/categories")
        # Ensure categories are loaded
        time.sleep(2)
        page.screenshot(path="mobile_categories.png")
        print("Captured mobile_categories.png")

        # 4. Profile
        print("Navigating to Profile...")
        page.goto(f"{base_url}/profile")
        time.sleep(2)
        page.screenshot(path="mobile_profile.png")
        print("Captured mobile_profile.png")

        browser.close()

if __name__ == "__main__":
    run()
