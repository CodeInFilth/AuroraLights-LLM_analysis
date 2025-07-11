from django.contrib.auth.decorators import login_required
from . import views
from django.contrib import admin
from django.urls import path, re_path, include
from django.contrib.auth.views import LogoutView
from ViewStocks.views import (login_view, register_user, discordLoginView)

urlpatterns = [
    path('', views.main, name='main'),
    path('welcome', views.welcome, name='welcome'),

    # Matches any html file
#    re_path(r'^.*\.*', views.pages, name='pages'),


#         User Auth |

#    path('login/', login_view, name="login"),
#    path('register/', register_user, name="register"),

#		 User Auth -> Discord  |

    path('oauth2/login/', discordLoginView.as_view(), name='oauth2-login'),
    path('logout/', views.logout_view, name='logout'),

#		 Main App
    path('dashboard', login_required(views.main),{'template': 'foo_index.html'}, name='dashboard'),
    path('ticker/', views.stock_price, name='ticker'),
    path('earnings_calendar/', views.earnings_calendar, name='earnings_calendar'),
    path('ticker/financial/', views.financial, name='financial'),
    path('ticker/options/', views.options, name='options'),
    path('ticker/short_volume/', views.short_volume, name='short_volume'),
    path('ticker/failure_to_deliver/', views.failure_to_deliver, name='failure_to_deliver'),
    path('reddit_analysis/', views.reddit_analysis, name='reddit_analysis'),
    path('wsb_live/', views.wsb_live, name='wsb_live'),
    path('wsb_live_ticker/', views.wsb_live_ticker, name="wsb_live_ticker"),
    path('wsb_documentation/', views.wsb_documentation, name="wsb_documentation"),
    path('reddit_ticker_analysis/', views.reddit_ticker_analysis, name='reddit_ticker_analysis'),
    path('latest_insider/', views.latest_insider, name='latest_insider'),
    path('market_overview/', views.market_overview, name='market_overview'),
    path('reverse_repo/', views.reverse_repo, name='reverse_repo'),
    path('daily_treasury/', views.daily_treasury, name='daily_treasury'),
    path('inflation/', views.inflation, name='inflation'),
    path('retail_sales/', views.retail_sales, name='retail_sales'),
    path('short_interest/', views.short_interest, name='short_interest'),
    path('low_float/', views.low_float, name='low_float'),
    path('ark_trades/', views.ark_trades, name='ark_trades'),
    path('historical_data/', views.historical_data, name='historical_data'),
    path('sub_news/', views.news_sentiment, name='sub_news'),
    path('google_trends/', views.google_trends, name='google_trends'),
    path('recommendations/', views.ticker_recommendations, name='recommendations'),
    path('major_holders/', views.ticker_major_holders, name='major_holders'),
    path('institutional_holders/', views.ticker_institutional_holders, name='institutional_holders'),
    path('mutual_fund_holders', views.ticker_mutual_fund_holders, name='mutual_fund_holders'),
    path('dividend_and_split/', views.dividend_and_split, name='dividend_and_split'),
    path('discussion/', views.discussion, name='discussion'),
    path('ticker_earnings/', views.ticker_earnings, name='ticker_earnings'),
    path('sec_fillings/', views.sec_fillings, name='sec_fillings'),
    path('insider_trading/', views.insider_trading, name='insider_trading'),
    path('subreddit_count/', views.subreddit_count, name='subreddit_count'),
    path('reddit_etf/', views.reddit_etf, name='reddit_etf'),
    path('amd_xlnx_ratio/', views.amd_xlnx_ratio, name='amd_xlnx_ratio'),
    path('beta/', views.beta, name='beta'),
    path('covid_beta/', views.covid_beta, name='covid_beta'),
    path('about/', views.about, name='about'),
    path('loading/', views.loading_spinner, name='loading'),

#		 Addons

    path('subscribe/', views.subscribe_to_wsb_notifications, name='subscribe'),
    path('mailing_preference/', views.mailing_preference, name='mailing_preference'),
    path('unsubscribe/', views.unsubscribe, name='unsubscribe'),
    path('sample_email/', views.sample_email, name='sample_email'),
]