"""
Script to create database inside scheduled_tasks folder
"""
import mysql.connector
from mysql.connector import Error
conn = mysql.connector.connect(host='localhost',
                                    database='skynet_aurora',
                                    user='auroratrades',
                                    password='Moneydick42069!')
db = conn.cursor()


def database():
    db.execute("""CREATE table IF NOT EXISTS stocksera_trending (
                symbol varchar(255),
                name varchar(255),
                count int,
                UNIQUE (symbol) );""")

    subreddits = ["wallstreetbets", "stocks", "options", "pennystocks", "investing", "shortsqueeze",
                  "spacs"]
    for subreddit in subreddits:
        db.execute("""CREATE TABLE IF NOT EXISTS `skynet_aurora`.`{}`
                   (`id` int AUTO_INCREMENT,
                   `rank` int NOT NULL,
                   `ticker` varchar(10) NOT NULL,
                   `total` varchar(10) NOT NULL DEFAULT '0',
                   `recent` varchar(10) NOT NULL DEFAULT '0',
                   `previous` varchar(10) NOT NULL DEFAULT '0',
                   `change` float NOT NULL,
                   `rockets` int(10) NOT NULL DEFAULT '0',
                   `posts` int(10) NOT NULL DEFAULT '0',
                   `upvotes` int(10) NOT NULL DEFAULT '0',
                   `comments` int(10) NOT NULL DEFAULT '0',
                   `price` float,
                   `one_day_change_percent` float,
                   `fifty_day_change_percent` float,
                   `volume` varchar(10),
                   `mkt_cap` varchar(25),
                   `floating_shares` varchar(10),
                   `beta` varchar(10),
                   `short_per_float` varchar(10),
                   `industry` varchar(100),
                   `website` varchar(150),
                   `prev_close` varchar(10),
                   `open` varchar(10),
                   `day_low` varchar(10),
                   `day_high` varchar(10),
                   `target` varchar(10),
                   `recommend` varchar(20),
                   `date_updated` varchar(20),
                   `subreddit` varchar(25), PRIMARY KEY (id));""".format(subreddit))

    db.execute("""CREATE table IF NOT EXISTS `skynet_aurora`.`cryptocurrency`
               (`id` int AUTO_INCREMENT,
               `rank` int NOT NULL,
               `ticker` varchar(10) NOT NULL,
               `total` int(10) NOT NULL DEFAULT 0,
               `recent` int(10) NOT NULL DEFAULT 0,
               `previous` int(10) NOT NULL DEFAULT 0,
               `change` float NOT NULL,
               `rockets` int(10) NOT NULL DEFAULT 0,
               `posts` int(10) NOT NULL DEFAULT 0,
               `upvotes` int(10) NOT NULL DEFAULT 0,
               `comments` int(10) NOT NULL DEFAULT 0,
               `price` float,
               `one_day_change_percent` float,
               `thirty_day_change_percent` float,
               `volume` varchar(10),
               `mkt_cap` varchar(25),
               `circulating_supply` varchar(20),
               `max_supply` varchar(20),
               `date_updated` VARCHAR(20), PRIMARY KEY (id));""")

    db.execute("CREATE table IF NOT EXISTS wsb_trending_24H ("
               "ticker varchar(255), "
               "mentions int(25), "
               "sentiment FLOAT, "
               "calls varchar(255), "
               "puts varchar(255), "
               "date_updated varchar(255) )")

    db.execute("CREATE table IF NOT EXISTS wsb_trending_hourly ("
               "ticker varchar(255), "
               "mentions int(25), "
               "sentiment FLOAT, "
               "calls varchar(255), "
               "puts varchar(255), "
               "date_updated varchar(255) )")

    db.execute("CREATE table IF NOT EXISTS wsb_yf ("
               "ticker varchar(255), "
               "mkt_cap varchar(255), "
               "price_change FLOAT, "
               "difference_sma FLOAT, "
               "difference_52w_high FLOAT, "
               "difference_52w_low FLOAT, "
               "mentions int(25) )")

    db.execute("CREATE table IF NOT EXISTS crypto_trending_24H ("
               "ticker varchar(255), "
               "mentions int(25), "
               "sentiment FLOAT, "
               "date_updated varchar(255) )")

    db.execute("CREATE table IF NOT EXISTS crypto_trending_hourly ("
               "ticker varchar(255), "
               "mentions int(25), "
               "sentiment FLOAT, "
               "date_updated varchar(255) )")

    for i in ["wsb", "crypto"]:
        db.execute("""CREATE TABLE IF NOT EXISTS `skynet_aurora`.`{}_change` (
                    `ticker` varchar(255), 
                    `mentions` int(25),
                    `change` FLOAT) """.format(i))

        db.execute("""CREATE table IF NOT EXISTS `skynet_aurora`.`{}_word_cloud` (
                   word varchar(255),
                   mentions int(25),
                   date_updated varchar(255) )""".format(i))

    db.execute("CREATE table IF NOT EXISTS reddit_etf ("
               "ticker varchar(255), "
               "open_date varchar(255), "
               "open_price FLOAT, "
               "num_shares int(25), "
               "close_date varchar(255), "
               "close_price FLOAT, "
               "PnL FLOAT, "
               "percentage FLOAT, "
               "status varchar(255))")

    db.execute("CREATE table IF NOT EXISTS earnings_calendar ("
               "name varchar(255), "
               "symbol varchar(255), "
               "mkt_cap varchar(255), "
               "eps_est varchar(255), "
               "eps_act varchar(255), "
               "earning_date varchar(255), "
               "earning_time varchar(255), "
               "UNIQUE(name, symbol) )")

    db.execute("CREATE table IF NOT EXISTS subreddit_count ("
               "ticker varchar(255), "
               "subreddit varchar(255), "
               "subscribers int(25), "
               "active int(25), "
               "updated_date varchar(255),"
               "percentage_active FLOAT, "
               "growth FLOAT, "
               "percentage_price_change FLOAT, "
               "UNIQUE(ticker, subreddit, updated_date) )")

    db.execute("CREATE table IF NOT EXISTS twitter_followers ("
               "ticker varchar(255), "
               "followers int(25), "
               "updated_date varchar(255),"
               "UNIQUE(ticker, updated_date))")

    db.execute("CREATE table IF NOT EXISTS short_interest ("
               "ticker varchar(255), "
               "date varchar(255), "
               "short_interest int(25), "
               "average_vol int(25), "
               "days_to_cover FLOAT, "
               "percent_float_short FLOAT)")

    db.execute("""CREATE TABLE IF NOT EXISTS `skynet_aurora`.`low_float`
               (`id` int AUTO_INCREMENT,
               ticker varchar(255),
               company varchar(255),
               exchange varchar(255),
               `previous_close` FLOAT,
               `one_day_change` FLOAT,
               `float` varchar(255),
               outstanding_shares varchar(255),
               short_int varchar(255),
               market_cap int(25),
               industry varchar(255), PRIMARY KEY (id));""")

    db.execute("CREATE table IF NOT EXISTS `skynet_aurora`.`reverse_repo` ("
               "record_date varchar(255), "
               "amount FLOAT, "
               "parties int(25), "
               "average FLOAT, "
               "UNIQUE(`record_date`));")

    db.execute("CREATE table IF NOT EXISTS daily_treasury ("
               "`record_date` varchar(255) NOT NULL UNIQUE, "
               "close_today_bal FLOAT, "
               "open_today_bal FLOAT, "
               "amount_change FLOAT, "
               "percent_change FLOAT)")

    db.execute("CREATE table IF NOT EXISTS retail_sales ("
               "record_date varchar(255) NOT NULL UNIQUE, "
               "value FLOAT, "
               "percent_change FLOAT, "
               "covid_monthly_avg int(25))")

    db.execute("CREATE table IF NOT EXISTS `skynet_aurora`.`inflation` ("
               "`Year` varchar(255),"
               "`Jan` FLOAT,"
               "`Feb` FLOAT,"
               "`Mar` FLOAT,"
               "`Apr` FLOAT,"
               "`May` FLOAT,"
               "`Jun` FLOAT,"
               "`Jul` FLOAT,"
               "`Aug` FLOAT,"
               "`Sep` FLOAT,"
               "`Oct` FLOAT,"
               "`Nov` FLOAT,"
               "`Dec` FLOAT,"
               "`Avg` FLOAT)")

    db.execute("""CREATE table IF NOT EXISTS `skynet_aurora`.`sec_fillings` (
               ticker varchar(255),
               filling varchar(255),
               description varchar(255),
               filling_date varchar(255),
               report_url varchar(255),
               filing_url varchar(255))""")

    db.execute("CREATE table IF NOT EXISTS daily_ticker_news ("
               "Ticker varchar(255), "
               "Date varchar(255), "
               "Title varchar(255), "
               "Link varchar(255), "
               "Sentiment varchar(255) )")

    db.execute("CREATE table IF NOT EXISTS insider_trading ("
               "Ticker varchar(255), "
               "Name varchar(255), "
               "Relationship varchar(255), "
               "TransactionDate varchar(255), "
               "TransactionType varchar(255), "
               "Cost FLOAT, "
               "Shares int(25), "
               "Value int(25), "
               "SharesLeft int(25),"
               "URL varchar(255) )")

    db.execute("""CREATE table IF NOT EXISTS latest_insider_trading (
               Ticker varchar(255),
               Name varchar(255) NOT NULL UNIQUE,
               Relationship varchar(255) NOT NULL UNIQUE,
               TransactionDate varchar(255) NOT NULL UNIQUE,
               TransactionType varchar(255) NOT NULL UNIQUE,
               Cost FLOAT NOT NULL UNIQUE,
               Shares int(25) NOT NULL UNIQUE,
               Value int(25) NOT NULL UNIQUE,
               SharesLeft int(25) NOT NULL UNIQUE,
               DateFilled varchar(255) NOT NULL UNIQUE,
               URL varchar(255))""")
    db.execute("CREATE table IF NOT EXISTS latest_insider_trading_analysis ("
               "Symbol varchar(255), "
               "Amount int(25), "
               "MktCap int(25), "
               "Proportion FLOAT) ")

    db.execute("CREATE table IF NOT EXISTS related_tickers ("
               "ticker varchar(255), "
               "ticker1 varchar(255), "
               "ticker2 varchar(255), "
               "ticker3 varchar(255), "
               "ticker4 varchar(255), "
               "ticker5 varchar(255), "
               "ticker6 varchar(255) )")

    db.execute("CREATE table IF NOT EXISTS stocktwits_trending ("
               "rank int(25), "
               "symbol varchar(255), "
               "date_updated varchar(255) )")

    # db.execute("CREATE table IF NOT EXISTS max_pain ("
    #            "symbol varchar(255), "
    #            "date_updated varchar(255), "
    #            "max_pain FLOAT ,"
    #            "UNIQUE ('symbol', 'date_updated', 'max_pain') )")

    print("Successfully created/updated database")


if __name__ == '__main__':
    database()
