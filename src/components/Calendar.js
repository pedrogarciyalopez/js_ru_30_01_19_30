import React from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import LocaleUtils from 'react-day-picker/moment'
import 'moment/locale/ru'
import 'react-day-picker/dist/style.css';

export default class Range extends React.Component {
    state = {
        from: null,
        to: null,
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick = (e) => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null
        });
    }

    render() {
        const { from, to } = this.state;
        return (
            <div style={{display: 'inline-block'}}>
                { !from && !to && <p>Выберите начало периода.</p> }
                { from && !to && <p>Выберите конец периода.</p> }
                { from && to &&
                <p>
                    Выбран период с { moment(from).format('LL') } по { moment(to).format('LL') }.
                    { ' ' }<a href="." onClick={ this.handleResetClick }>Сбросить</a>
                </p>
                }
                <DayPicker
                    numberOfMonths={ 2 }
                    localeUtils={ LocaleUtils }
                    locale='ru'
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
            </div>
        );
    }

}