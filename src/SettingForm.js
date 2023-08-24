import { Layout, AccountConnection, Link, Card, Text, Checkbox, VerticalStack, PageActions,MediaCard } from "@shopify/polaris";
import React, { Component } from "react";

class SettingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Connected: false,
            autoPublish: false,
        };
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit.bind(this)} style={{marginTop:'250px'}}>
                <Layout>
                    <Layout.AnnotatedSection
                        title="Connect User"
                        description="Connect your shopify store your dropshipp Account"
                    >
                        {this.accountConnectionMarkup()}
                    </Layout.AnnotatedSection>
                    <Layout.AnnotatedSection
                        title="Selling and shipping"
                        description="Manage product,pricing, shipping and customer notification.">
                        <VerticalStack gap="3">
                            <Card sectioned >   
                                <Text as="h2" variant="headingMd">
                                    products
                                </Text>
                                <Checkbox
                                    label="Automatically publish new products"
                                    helpText="New product add dropshipp will be publish to all shopify channel"
                                    checked={this.state.autoPublish}
                                    onChange={this.handleInputChange('autoPublish')}
                                />
                            </Card>

                            <Card sectioned >
                                <Text as="h2" variant="headingMd">
                                    pricing roles
                                </Text>
                            </Card>

                            <Card sectioned >
                                <Text as="h2" variant="headingMd">
                                    Shipping
                                </Text>
                            </Card>
                        </VerticalStack>


                    </Layout.AnnotatedSection>

                    <Layout.AnnotatedSection
                        title="Reporting"
                        description="Manage how you track  sucess with Dropshipp"
                    >
                        <Card sectioned >
                            <Text as="h6" variant="bodysm">this card conntent find data from shopify store this value finde out creating new store speed up to store custmaztion</Text>
                        </Card>
                    </Layout.AnnotatedSection>
                    <Layout.Section>
                        <PageActions
                            primaryAction={{
                                content: 'save',
                                submit: true,
                            }}
                        />
                    </Layout.Section>
                    <MediaCard
                        title="Getting Started"
                        primaryAction={{
                            content: 'Learn about getting started',
                            onAction: () => { },
                        }}
                        description="Discover how Shopify can power up your entrepreneurial journey."
                        popoverActions={[{ content: 'Dismiss', onAction: () => { } }]}
                    >
                        <img
                            alt=""
                            width="100%"
                            height="100%"
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                            src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                        />
                    </MediaCard>
                </Layout>
            </form>

        )
    }
    toggleConnection() {
        this.setState(({ Connected }) => ({ Connected: !Connected }));
    }

    handleInputChange(field) {
        return (value) => this.setState({ [field]: value });
    }

    handleFormSubmit(evt) {
        evt.preventDefault();
        console.log(this.state);
    }

    accountConnectionMarkup() {
        return this.state.Connected
            ? (
                <AccountConnection
                    avatarUrl="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    accountName="Domain Mcphee"
                    details="creagonert myshopfy.com"
                    action={{ content: "Disconnect", onAction: this.toggleConnection.bind(this) }}
                    connected={this.state.Connected}
                />
            ) :
            (<AccountConnection
                title="Dropshipp"
                action={{ content: "Connected" }}
                details="No Account Connect"
                termsOfService={<p>shopify polaric accound <Link url="#">data connectede</Link> dropshipp acc connection are finf out this value find out</p>}
            />)
    }
}

export default SettingForm;