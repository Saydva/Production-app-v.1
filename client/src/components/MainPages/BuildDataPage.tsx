import { useState } from "react";
import Model from "../BuildComponents/Model";
import SelectPartToUpdate from "../BuildComponents/SubComponents/SelectPartToUpdate";
import { AllProps, MyContext } from "../utils/Context";

// import Test from "../BuildComponents/SubComponents/Test";

const FetchSimulation = [
  {
    _id: {
      $oid: "67c399d543389cc312584189",
    },
    partName: "qweq",
    partStTime: 1354381,
    piecec: [
      [
        {
          _id: "67c0dff63698213a19a3d8d6",
          partName: "1",
          partStTime: 1,
          attribute: [],
          descrition: [],
          operation: [
            {
              name: "23123123",
              stTime: 1,
            },
          ],
          __v: 0,
        },
      ],
    ],
    subPiecec: [
      [
        {
          _id: "67c399b343389cc31258417f",
          partName: "asdaSDA",
          partStTime: 1231257,
          piecec: [
            [
              {
                _id: "67c3976043389cc312584142",
                partName: "jhgsdljfas",
                partStTime: 6,
                attribute: [
                  [
                    {
                      _id: "67c3820043389cc312583f14",
                      name: "asdadsas",
                      value: "dasdasda",
                      __v: 0,
                    },
                  ],
                ],
                descrition: [],
                operation: [
                  {
                    name: "sadfsaf",
                    stTime: 6,
                  },
                ],
                __v: 0,
              },
              {
                _id: "67c3976043389cc312584142",
                partName: "jhgsdljfas",
                partStTime: 6,
                attribute: [
                  [
                    {
                      _id: "67c3820043389cc312583f14",
                      name: "asdadsas",
                      value: "dasdasda",
                      __v: 0,
                    },
                  ],
                ],
                descrition: [],
                operation: [
                  {
                    name: "sadfsaf",
                    stTime: 6,
                  },
                ],
                __v: 0,
              },
              {
                _id: "67c3976043389cc312584142",
                partName: "jhgsdljfas",
                partStTime: 6,
                attribute: [
                  [
                    {
                      _id: "67c3820043389cc312583f14",
                      name: "asdadsas",
                      value: "dasdasda",
                      __v: 0,
                    },
                  ],
                ],
                descrition: [],
                operation: [
                  {
                    name: "sadfsaf",
                    stTime: 6,
                  },
                ],
                __v: 0,
              },
              {
                _id: "67c3976043389cc312584142",
                partName: "jhgsdljfas",
                partStTime: 6,
                attribute: [
                  [
                    {
                      _id: "67c3820043389cc312583f14",
                      name: "asdadsas",
                      value: "dasdasda",
                      __v: 0,
                    },
                  ],
                ],
                descrition: [],
                operation: [
                  {
                    name: "sadfsaf",
                    stTime: 6,
                  },
                ],
                __v: 0,
              },
            ],
            [
              {
                _id: "67c31cae061420cae3b2ac4d",
                partName: "testing",
                partStTime: 1,
                attribute: [],
                descrition: [],
                operation: [
                  {
                    name: "test",
                    stTime: 1,
                  },
                ],
                __v: 0,
              },
            ],
            [
              {
                _id: "67c0dff63698213a19a3d8d6",
                partName: "1",
                partStTime: 1,
                attribute: [],
                descrition: [],
                operation: [
                  {
                    name: "23123123",
                    stTime: 1,
                  },
                ],
                __v: 0,
              },
            ],
          ],
          attribute: [
            [
              {
                _id: "67c3820543389cc312583f16",
                name: "asdasdas",
                value: "dasdasdas",
                __v: 0,
              },
            ],
          ],
          descrition: [
            [
              {
                _id: "67c3810543389cc312583eb8",
                name: "RWERWQERQW",
                value: "ERWERQWER",
                __v: 0,
              },
            ],
          ],
          operation: [
            {
              name: "asdA",
              stTime: 1231231,
            },
          ],
          __v: 0,
        },
      ],
    ],
    attribute: [
      [
        {
          _id: "67c3820043389cc312583f14",
          name: "asdadsas",
          value: "dasdasda",
          __v: 0,
        },
      ],
    ],
    description: [
      [
        {
          _id: "67c3810543389cc312583eb8",
          name: "RWERWQERQW",
          value: "ERWERQWER",
          __v: 0,
        },
      ],
    ],
    operation: [
      {
        name: "qwe",
        stTime: 123123,
      },
    ],
    __v: 0,
  },
  {
    _id: {
      $oid: "67c39a1543389cc31258418f",
    },
    partName: "231",
    partStTime: 1231381,
    piecec: [
      [
        {
          _id: "67c31cae061420cae3b2ac4d",
          partName: "testing",
          partStTime: 1,
          attribute: [],
          descrition: [],
          operation: [
            {
              name: "test",
              stTime: 1,
            },
          ],
          __v: 0,
        },
      ],
    ],
    subPiecec: [
      [
        {
          _id: "67c399b343389cc31258417f",
          partName: "asdaSDA",
          partStTime: 1231257,
          piecec: [
            [
              {
                _id: "67c3976043389cc312584142",
                partName: "jhgsdljfas",
                partStTime: 6,
                attribute: [
                  [
                    {
                      _id: "67c3820043389cc312583f14",
                      name: "asdadsas",
                      value: "dasdasda",
                      __v: 0,
                    },
                  ],
                ],
                descrition: [],
                operation: [
                  {
                    name: "sadfsaf",
                    stTime: 6,
                  },
                ],
                __v: 0,
              },
              {
                _id: "67c3976043389cc312584142",
                partName: "jhgsdljfas",
                partStTime: 6,
                attribute: [
                  [
                    {
                      _id: "67c3820043389cc312583f14",
                      name: "asdadsas",
                      value: "dasdasda",
                      __v: 0,
                    },
                  ],
                ],
                descrition: [],
                operation: [
                  {
                    name: "sadfsaf",
                    stTime: 6,
                  },
                ],
                __v: 0,
              },
              {
                _id: "67c3976043389cc312584142",
                partName: "jhgsdljfas",
                partStTime: 6,
                attribute: [
                  [
                    {
                      _id: "67c3820043389cc312583f14",
                      name: "asdadsas",
                      value: "dasdasda",
                      __v: 0,
                    },
                  ],
                ],
                descrition: [],
                operation: [
                  {
                    name: "sadfsaf",
                    stTime: 6,
                  },
                ],
                __v: 0,
              },
              {
                _id: "67c3976043389cc312584142",
                partName: "jhgsdljfas",
                partStTime: 6,
                attribute: [
                  [
                    {
                      _id: "67c3820043389cc312583f14",
                      name: "asdadsas",
                      value: "dasdasda",
                      __v: 0,
                    },
                  ],
                ],
                descrition: [],
                operation: [
                  {
                    name: "sadfsaf",
                    stTime: 6,
                  },
                ],
                __v: 0,
              },
            ],
            [
              {
                _id: "67c31cae061420cae3b2ac4d",
                partName: "testing",
                partStTime: 1,
                attribute: [],
                descrition: [],
                operation: [
                  {
                    name: "test",
                    stTime: 1,
                  },
                ],
                __v: 0,
              },
            ],
            [
              {
                _id: "67c0dff63698213a19a3d8d6",
                partName: "1",
                partStTime: 1,
                attribute: [],
                descrition: [],
                operation: [
                  {
                    name: "23123123",
                    stTime: 1,
                  },
                ],
                __v: 0,
              },
            ],
          ],
          attribute: [
            [
              {
                _id: "67c3820543389cc312583f16",
                name: "asdasdas",
                value: "dasdasdas",
                __v: 0,
              },
            ],
          ],
          descrition: [
            [
              {
                _id: "67c3810543389cc312583eb8",
                name: "RWERWQERQW",
                value: "ERWERQWER",
                __v: 0,
              },
            ],
          ],
          operation: [
            {
              name: "asdA",
              stTime: 1231231,
            },
          ],
          __v: 0,
        },
      ],
    ],
    attribute: [
      [
        {
          _id: "67c3820043389cc312583f14",
          name: "asdadsas",
          value: "dasdasda",
          __v: 0,
        },
      ],
    ],
    description: [
      [
        {
          _id: "67c3810543389cc312583eb8",
          name: "RWERWQERQW",
          value: "ERWERQWER",
          __v: 0,
        },
      ],
    ],
    operation: [
      {
        name: "1231",
        stTime: 123,
      },
    ],
    __v: 0,
  },
];

const BuildDataPage = () => {
  const [dbObject, setDbObject] = useState<AllProps | null>(null);

  return (
    <div>
      <div className="flex flex-col gap-2 mx-2">
        {/* <Test props={FetchSimulation} /> */}
        <MyContext.Provider value={{ dbObject, setDbObject }}>
          <h3>You are building a model data</h3>
          <SelectPartToUpdate array={FetchSimulation} />
          <Model />
        </MyContext.Provider>
      </div>
    </div>
  );
};

export default BuildDataPage;
