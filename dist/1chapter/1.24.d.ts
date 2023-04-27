export default class DateUtil {
    static dateUtil: DateUtil;
    static getInstance(): DateUtil;
    private constructor();
    formatDate(): void;
    diffDateByDay(): void;
    diffDateByHour(): void;
    timeConversion(restTime: number): void;
}
