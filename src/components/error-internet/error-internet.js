import { Alert, Flex, Space, Steps, Typography } from 'antd'

export default function ErrorInternet() {
  return (
    <div className="wrapper wrapper--height">
      <Space direction="vertical">
        <Alert
          message="Connection Error"
          description="It seems that you are currently offline. Please check your internet connection to continue."
          type="error"
        />
        <Flex vertical justify="center" gap={16} align="center">
          <Typography>Here are a few steps you can take to resolve the issue:</Typography>
          <Steps
            direction="vertical"
            items={[
              {
                title: '1',
                description: 'Make sure your Wi-Fi is turned on and connected to a network.',
              },
              {
                title: '2',
                description: 'If you are using mobile data, ensure that it is enabled.',
              },
              {
                title: '3',
                description: 'Restart your router/modem if you are using a wired connection.',
              },
              {
                title: '4',
                description: 'Try refreshing the page after reconnecting.',
              },
            ]}
          />
          <Typography>
            If the problem persists, please contact your internet service provider for assistance.
          </Typography>
        </Flex>
      </Space>
    </div>
  )
}
