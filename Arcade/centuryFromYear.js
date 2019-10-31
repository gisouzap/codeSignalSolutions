function centuryFromYear(year)
{
	var sum;
	
	if (year <= 0)
	{
		sum = 1;
		return sum;
	}
	else if (year % 100 == 0)
	{
		sum = year / 100;
		return sum;
	}
	else
	{
		sum = year / 100 + 1;
		return Number.parseInt(sum);
	}
}
