import React from 'react'
import { Table, Icon, Menu, } from 'semantic-ui-react'
import { useTable } from '@motor-js/engine'

const TableExampleCompact = () => {

  const cols = [{
        qField: '[Company Name]',
        dataKey: 'company',
        qLabel: 'Company Name'
      },
      {
        qField: '=sum(Quantity)',
        dataKey: 'quantity',
        qLabel: 'Quantity Sold'
      },
      {
        qField: '=sum(Quantity * Price)',
        dataKey: 'revenue',
        qLabel: 'Revenue',
        qNumType: 'M',
        qNumFmt: '£#,##0'
      }
    ];

  const { 
    dataSet,
    headerGroup,
    select,
    incrementPage,
    decrementPage
  } = useTable({
    cols,
    qPage: { qTop: 0, qLeft: 0, qWidth: 5, qHeight: 10 },
  });


  const handleSelect = (c, i) => {
    console.log(c)
    select(c.columnId, [c.elemNumber], false)
  }

  return (
    <div style={{ padding: '10px' }}>
      {dataSet && 
        <Table compact celled striped>
            <Table.Header>
              <Table.Row>
                {headerGroup.map((d,i) => (
                  <Table.HeaderCell key={i}>{d.title}</Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>

            <Table.Body>
            {dataSet.map((d, i) => (
              <Table.Row key={i}>
                <Table.Cell onClick={() => handleSelect(d.company)}>{d.company.text}</Table.Cell>
                <Table.Cell>{d.quantity.text}</Table.Cell>
                <Table.Cell>{d.revenue.text}</Table.Cell>
              </Table.Row>
            ))}
            </Table.Body>

            <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon onClick={() => decrementPage()}>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon onClick={() => incrementPage()}>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      }
    </div>
  )
}

export default TableExampleCompact