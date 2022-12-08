import React, {FC, ReactNode} from 'react';
import createPersistedState from 'use-persisted-state';
import {Button, Flex} from "@chakra-ui/react";

interface AuthenticatedLayoutProps {
    children: ReactNode
}

const useSidebarState = createPersistedState<boolean>('is_sidebar_collapsed');
const AuthenticatedLayout: FC<AuthenticatedLayoutProps> = ({children}) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useSidebarState();

    return (
        <Flex dir="row" height="100vh">
            <Flex w={isSidebarCollapsed ? 10 : 100} bgColor="red.100"><Button onClick={() => setIsSidebarCollapsed(prevState => !prevState)}>Open</Button></Flex>
            <Flex>{children}</Flex>
        </Flex>
    );
};

export default AuthenticatedLayout;