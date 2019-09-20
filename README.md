# jquery_descriptive_time_display
a small javascript/jquery script that calculates seconds from a unix timestamp and sets a descriptive display


timestamps less than 3600 seconds from current it would display ' x minutes ago at hh:mm:(pm or am)'
for example for a timestamp that is 120 seconds in the past at 4:58pm it would display '2 minutes ago at 4:58pm'

timestamps >= 3600 seconds but <= it would read 'x hours ago at hh:mm (pm or am)

etc
