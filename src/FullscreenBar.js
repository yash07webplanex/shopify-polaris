import {
    Badge,
    ButtonGroup,
    FullscreenBar,
    Button,
    Text,
    DataTable,
    LegacyCard,
    Page
  } from '@shopify/polaris';
  import {useState, useCallback} from 'react';
  
  function FullscreenBarExample() {
    const [isFullscreen, setFullscreen] = useState(true);

  
    const handleActionClick = useCallback(() => {
      setFullscreen(false);
    }, []);
  
    const fullscreenBarMarkup = (
      <FullscreenBar onAction={handleActionClick}>
        <div
          style={{
            display: 'flex',
            flexGrow: 1,  
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }}
        >
          <Badge status="info">Draft</Badge>
          <div style={{marginLeft: '1rem', flexGrow: 1}}>
            <Text variant="headingLg" as="p">
              Page title
            </Text>
          </div>
          <ButtonGroup>
            <Button onClick={() => {}}>Secondary Action</Button>
            <Button primary onClick={() => {}}>
              Primary Action
            </Button>
          </ButtonGroup>
        </div>
      </FullscreenBar>
    );

    const rows = [
      ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
      ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
      [
        'Navy Merino Wool Blazer with khaki chinos and yellow belt',
        '$445.00',
        124518,
        32,
        '$14,240.00',
      ],
    ];
  
    return (
      <div style={{height: '250px', width: '100%'}}>
        {isFullscreen && fullscreenBarMarkup}
        <div style={{padding: '1rem'}}>
          {!isFullscreen && (
            <Button onClick={() => setFullscreen(true)}>Go Fullscreen</Button>
          )}
          <Text variant="headingLg" as="p">
          <Page title="Sales by product">
      <LegacyCard>
        <DataTable 
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',q
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
        />
      </LegacyCard>
    </Page>
          </Text>
        </div>
      </div>
    );
  }

  export default FullscreenBarExample;
