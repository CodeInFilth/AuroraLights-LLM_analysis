"""
Compilation of scheduled tasks to run
"""

import os
import sqlite3
from pathlib import Path
import scheduled_tasks.create_database as create_database
import scheduled_tasks.reddit.get_reddit_trending_stocks.scrape_reddit as scrape_reddit_stocks
import scheduled_tasks.reddit.get_reddit_trending_stocks.scrape_reddit_discussion_thread as scrape_discussion_thread
import scheduled_tasks.reddit.get_reddit_trending_crypto as scrape_reddit_crypto
import scheduled_tasks.reddit.get_subreddit_count as get_subreddit_count
import scheduled_tasks.reddit.buy_trending_tickers as buy_trending_tickers
import scheduled_tasks.get_twitter_followers as get_twitter_followers
import scheduled_tasks.get_short_volume as get_short_volume
import scheduled_tasks.get_ticker_info as get_ticker_info
import scheduled_tasks.reset_options_cache as reset_options_cache
import scheduled_tasks.get_financial as get_financial
import scheduled_tasks.get_earnings_calendar as get_earnings_calendar
import scheduled_tasks.get_failure_to_deliver as get_failure_to_deliver
import scheduled_tasks.get_latest_insider_trading as get_latest_insider_trading
import scheduled_tasks.miscellaneous as miscellaneous
import scheduled_tasks.economy.get_reverse_repo as get_reverse_repo
import scheduled_tasks.economy.get_inflation as get_inflation
import scheduled_tasks.economy.get_daily_treasury as get_daily_treasury
import scheduled_tasks.economy.get_retail_sales as get_retail_sales
import scheduled_tasks.economy.get_upcoming_events_date as get_upcoming_events_date

# Get real time trending tickers from WSB
SCRAPE_WSB = True

if __name__ == '__main__':
    # Create/update database. It is okay to run this even though you have an existing database.
    create_database.database()

    if SCRAPE_WSB:
        scrape_discussion_thread.wsb_live()
        scrape_discussion_thread.wsb_change()
        scrape_discussion_thread.get_mkt_cap()
