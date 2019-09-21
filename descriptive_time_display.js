/*
* add this to page with script
* then call set_descriptive_time_stamp() to
* */

function convert_to_12hr_format(hour_in_24hr_format, minute) {
    var pm_am = 'AM';
    if (hour_in_24hr_format > 12) {
        hour_in_24hr_format -= 12;
        pm_am = 'PM';

    } else if (hour_in_24hr_format === 0) {
        hour_in_24hr_format = 12;
    } else if (hour_in_24hr_format === 12){
        pm_am = 'PM'
    }

    return hour_in_24hr_format+':'+ minute + pm_am
}


// will take a timestamp(in seconds) and get the number of seconds from current timestamp
// and return a descriptive value of it
function get_descriptive_timestamp(prev_time, just_date) {
    //prev_time == any prev_time in timestamp seconds
    prev_time = parseInt(parseInt(prev_time) * 1000); // convert to milliseconds
    var prev_date = new Date(prev_time);
    if (just_date)
        return prev_date.toDateString();


    var curr_date = new Date(Date.now());
    var curr_time = curr_date.getTime();
    var elapsed_time = parseInt(curr_time - prev_time);
    var disp_str; var ago; var meas;
    if (elapsed_time > 86400000 && elapsed_time < 172800000){
        disp_str = "Yesterday at " + convert_to_12hr_format(prev_date.getHours(), prev_date.getMinutes())
    } else if (elapsed_time >= 3600000 && elapsed_time <= 86400000) {
        ago = Math.floor(elapsed_time/3600000);
        meas = (ago === 1) ? 'hour': 'hours';
        disp_str = ago +" "+ meas+" ago at " + convert_to_12hr_format(prev_date.getHours(), prev_date.getMinutes())
    }else if (elapsed_time < 3600000) {
        ago = Math.floor(elapsed_time/60000);  // 60 seconds
        meas = (ago === 1) ? 'minute': 'minutes';
        disp_str = ago +" "+ meas+" ago at " + convert_to_12hr_format(prev_date.getHours(), prev_date.getMinutes())
    }else {
        ago = Math.floor(elapsed_time/86400000); // 86400 seconds

        disp_str = ago +" "+ 'days'+" ago on " + prev_date.toDateString()
    }

    return disp_str


}

// used to set descriptive timestamp on all elements with a desc_time class
// data-obj_timestamp and data-just_date should be added (just date, will only bring the date
function set_descriptive_time_stamp() {

    $('.desc_time[data-obj_timestamp]').each(function (index, value) {
        var time_ele = $(this);
        var disp_str = get_descriptive_timestamp(time_ele.data('obj_timestamp'), time_ele.data('just_date'));

        time_ele.text(disp_str)
    })

}

