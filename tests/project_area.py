"""Run with python3 tests/project_area.py while the app is running."""
import asyncio
from playwright.async_api import async_playwright


async def main():
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 1800})
        await page.goto("http://localhost:8080/projects", wait_until="networkidle")
        articles = page.locator("article")
        assert await articles.count() == 20, "All existing projects must remain"
        for article in await articles.all():
            area = article.locator("dl > div").filter(has=page.locator("dt", has_text="Area"))
            assert await area.count() == 1, "Each project must have an area specification"
            assert await area.locator("dd").inner_text() == "-", "Unknown areas must display '-'"
        await browser.close()
    print("PASS: all 20 project areas display '-'")


asyncio.run(main())