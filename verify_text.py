from playwright.sync_api import sync_playwright
import time

def verify_text_presence(page):
    print("Navigating to Login...")
    page.goto("http://localhost:3000/")
    page.wait_for_timeout(2000)
    page.get_by_role("button", name="ENTRAR NA PLATAFORMA").click()
    page.wait_for_timeout(3000)

    # Check AutoMod
    print("Navigating to Community...")
    page.goto("http://localhost:3000/dashboard/community")
    page.wait_for_timeout(2000)

    # Check for text "AutoMod Avançado"
    if page.get_by_text("AutoMod Avançado").is_visible():
        print("SUCCESS: AutoMod Avançado found.")
    else:
        # Try scrolling
        page.mouse.wheel(0, 1000)
        page.wait_for_timeout(500)
        if page.get_by_text("AutoMod Avançado").is_visible():
             print("SUCCESS: AutoMod Avançado found after scroll.")
        else:
             print("FAILURE: AutoMod Avançado NOT found.")

    # Check Overlay Manager
    print("Navigating to Tools...")
    page.goto("http://localhost:3000/dashboard/tools")
    page.wait_for_timeout(2000)

    if page.get_by_text("Editor de Overlay").is_visible():
        print("SUCCESS: Editor de Overlay found.")
    else:
        page.mouse.wheel(0, 1000)
        page.wait_for_timeout(500)
        if page.get_by_text("Editor de Overlay").is_visible():
             print("SUCCESS: Editor de Overlay found after scroll.")
        else:
             print("FAILURE: Editor de Overlay NOT found.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_text_presence(page)
        finally:
            browser.close()
