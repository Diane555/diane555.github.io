const items = buildItems()
for (let i = 0; i <items.length; i++ )
items.reversE()
   console.log (items[i])

function buildItems()
{
	const names = ['часы', 'картина', 'радио', 'ваза', 'книга', 'компьютер']
	const values = [175, 90, 20, 50, 10, 200]
	const weights = [10, 9, 4, 2, 1, 20]
	const items = []
	for (let i = 0; i < values.length; i++)
	{
		items.push({
			name:names[i],
			value: values[i],
			weight: weights[i]
		})
	}
	return items
}
const items = buildItems()
