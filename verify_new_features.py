from playwright.sync_api import sync_playwright
import time

def verify_features(page):
    # 1. Verify Watch Stream Features
    print("Navigating to Watch Stream...")
    page.goto("http://localhost:3000/watch/1")

    # Wait for hydration
    page.wait_for_timeout(3000)

    # Take screenshot of Watch Stream
    print("Taking screenshot of Watch Stream...")
    page.screenshot(path="/home/jules/verification/watch_stream_features.png", full_page=True)

    # 2. Verify Dashboard Tools
    print("Navigating to Dashboard Tools...")
    page.goto("http://localhost:3000/dashboard/tools")
    page.wait_for_timeout(2000)
    print("Taking screenshot of Dashboard Tools...")
    page.screenshot(path="/home/jules/verification/dashboard_tools_features.png", full_page=True)

    # 3. Verify Community Page (AutoMod)
    print("Navigating to Dashboard Community...")
    page.goto("http://localhost:3000/dashboard/community")
    page.wait_for_timeout(2000)
    print("Taking screenshot of Dashboard Community...")
    page.screenshot(path="/home/jules/verification/dashboard_community_features.png", full_page=True)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        # Set viewport to a reasonable desktop size
        page.set_viewport_size({"width": 1280, "height": 1000})
        try:
            verify_features(page)
        finally:
            browser.close()
