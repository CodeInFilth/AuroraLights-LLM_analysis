This is a large scale LLM and ML project using Django and Opensource tools to aggregate financial market data and store historical data inside a SQL database.

Simply run the tasks on a cron and have django process the smaller actions.


```powershell
   ████████▓████████████████████████       [ I made this at 4am so dont judge my dirty code ]
   ████████████████████████▓████████             [ Tested on Mac OS 10.14+ and Ubuntu 18.04 ]
   █████████████▓███████████████████                 
   ███████████████████████████▓████▓                 [---------S O U R C E  2 O 2 1---------]
   ▓░    ▀▀▀▀▓██▓██▓██▓█▓▀▀▀▀▀░   ▀░                 |       ████████  ███   ███            | 
   ▓             ░▓░█▀▀            ▐                 |       ███       ███   ███            | 
   ▓              ▐█▓▌             ░                 |       ████████  ███   ███            | 
   ▓             ▐▐▓▓░            ░▓                 |       ███       ███   ████████       | 
   ▓▄░         ░▄▓▀░▀░▄░         ░░▓                 |                                      | 
   ▓██▄▄▄▄▄▄▄▄▓░▀▀   ░▀▓▄░▄▄▄▄▄▄▄███                 |      ██████   ██   ██  ██   ██       |  
   ▓██████████▌░  ▐░   ▐████████████                 |        ██     ███████  ███████       |  
   ▓▓▓███████▓▌   ▐▌   ▐▓███████████                 |        ██     ██   ██    ███         |  
   ▓▓▓██▓▓▓▓██▓▄▓▄▄█▄▓▄████▓█▓▓▓▓███                 |                                      |
   ▓▓▓▓▓▓▓▓░▓▓████░▓████▓██▓░▓▓▓▓▓▓▓                 [  python :: August 2021 :: build v 1  ]
        ▓▓▓▐▓▐█▓▐▓▓▐▓█ ▓▌▓▓▓                         |                                      |  
                                                     [▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀]
```       

# AuroraLights-WebServ     

<p align="center">
  <img src="./static/auroraLights/icon-aurora--gradient.png" width="255" height="255">
</p>
   
## Frequency to run tasks
- Do note that the frequency to run the files are for guidance only. You do not need to follow them strictly. Change according to your preference.

| Script Name                                                                           | Functions                               | Frequency   |
| ------------------------------------------------------------------------------------- |-----------------------------------------|-------------|
| scheduled_tasks/reddit/buy_trending_tickers.py                                        | main()                                  | Daily (MH)  |
| scheduled_tasks/twitter/get_twitter_followers.py                                      | main()                                  | Daily       |
| scheduled_tasks/twitter/scrape_trending_posts.py                                      | main()                                  | Daily (MH)  |
| scheduled_tasks/economy/get_reverse_repo.py                                           | reverse_repo()                          | 1.30PM      |
| scheduled_tasks/economy/get_daily_treasury.py                                         | download_json()                         | 4.00PM      |
| scheduled_tasks/economy/get_inflation.py                                              | inflation()                             | Monthly     |
| scheduled_tasks/economy/get_retail_sales.py                                           | retail_sales()                          | Monthly     |
| scheduled_tasks/economy/get_initial_jobless_claims.py                                 | jobless_claims()                        | Weekly      |
| scheduled_tasks/economy/get_upcoming_events_date.py                                   | main()                                  | 6.00PM      |
| scheduled_tasks/get_earnings_calendar.py                                              | main()                                  | Daily (AH)  |
| scheduled_tasks/get_failure_to_deliver.py                                             | main()                                  | 2 Weeks     |
| scheduled_tasks/get_latest_insider_trading.py                                         | main()                                  | 2 Hours     |
| scheduled_tasks/get_short_volume.py                                                   | main()                                  | 6.00PM      | 
| scheduled_tasks/get_stocks_summary.py                                                 | main()                                  | 10 Mins     |
| scheduled_tasks/get_stocktwits_summary.py                                             | main()                                  | Hourly      |
| scheduled_tasks/government/get_senate_trading.py                                      | main()                                  | Daily (AH)  |
| scheduled_tasks/government/get_house_trading.py                                       | main()                                  | Daily (AH)  |
| scheduled_tasks/get_ipo_calendar.py                                                   | main()                                  | Daily (AH)  |
| scheduled_tasks/reset_options_cache.py                                                | reset_options()                         | Daily (AH)  |
| scheduled_tasks/miscellaneous.py                                                      | main()                                  | Daily (AH)  |

```powershell
                                 [---------S O U R C E  2 O 2 1---------]
                                 |       ████████  ███   ███            |
                                 |       ███       ███   ███            |
                                 |       ████████  ███   ███            |
                                 |       ███       ███   ████████       |
                                 |                                      |
                                 |      ██████   ██   ██  ██   ██       |
                                 |        ██     ██   ██  ██   ██       |
                                 |        ██     ███████  ███████       |
                                 |        ██     ██   ██    ███         |
                                 |                                      |
                                 |    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀     |
                                 [----not everything is always clean----]
```
