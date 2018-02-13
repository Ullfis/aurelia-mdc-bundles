export interface IMdcToolbarFlexibleChangeEvent extends CustomEvent {
    detail: {
        flexibleExpansionRatio: number;
    };
}
export declare class MdcToolbar {
    private element;
    class: any;
    fixed: boolean;
    waterfall: boolean;
    fixedLastrowOnly: boolean;
    flexible: boolean;
    flexibleDefault: boolean;
    private log;
    private elementToolbar;
    private mdcToolbar;
    constructor(element: Element);
    private bind();
    private unbind();
    private attached();
    private detached();
    private onChange(evt);
    private fixedChanged(newValue);
    private waterfallChanged(newValue);
    private fixedLastrowOnlyChanged(newValue);
    private flexibleChanged(newValue);
    private flexibleDefaultChanged(newValue);
}
